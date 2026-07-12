/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-breakfast-treat-approx-4-x-2-x-7-8",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707934",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-breakfast-treat-approx-4-x-2-x-7-8",
      "kind": "unit",
      "label": "1 breakfast treat (approx 4\" x 2\" x 7/8\")"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-anisette-sponge-4-x-1-1-8-x-7-8",
      "kind": "unit",
      "label": "1 anisette sponge (4\" x 1-1/8\" x 7/8\")"
    },
    {
      "gramsPerUnit": 12.8,
      "key": "1-egg-jumbo-4-x-2",
      "kind": "unit",
      "label": "1 egg jumbo (4\" x 2\")"
    },
    {
      "gramsPerUnit": 5.2,
      "key": "1-ladyfinger-biscuit",
      "kind": "unit",
      "label": "1 ladyfinger biscuit"
    },
    {
      "gramsPerUnit": 8.3,
      "key": "1-ladyfinger-3-x-1-1-8-x-1",
      "kind": "unit",
      "label": "1 ladyfinger (3\" x 1-1/8\" x 1\")"
    }
  ],
  "name": "Cookie, ladyfinger",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 59.7,
    "energy_kcal": 365.0,
    "fat_g": 9.1,
    "fibre_g": 1.0,
    "folate_ug": 60.0,
    "iron_mg": 3.58,
    "magnesium_mg": 12.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 173.0,
    "potassium_mg": 113.0,
    "protein_g": 10.6,
    "salt_g": 0.3675,
    "sat_fat_g": 3.07,
    "sodium_mg": 147.0,
    "sugar_g": 25.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707934",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
