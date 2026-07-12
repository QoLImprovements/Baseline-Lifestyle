/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup-bite-size",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707909",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "1-cup-bite-size",
      "kind": "unit",
      "label": "1 cup, bite size"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-large-bar",
      "kind": "unit",
      "label": "1 large bar"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-keebler-rainbow-chips-deluxe",
      "kind": "unit",
      "label": "1 Keebler Rainbow Chips Deluxe"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "1-medium-bar",
      "kind": "unit",
      "label": "1 medium bar"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "1-pepperidge-farm-chocolate-chunk-cookie",
      "kind": "unit",
      "label": "1 Pepperidge Farm Chocolate Chunk Cookie"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-large-cookie",
      "kind": "unit",
      "label": "1 large cookie"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-subway-cookie",
      "kind": "unit",
      "label": "1 Subway cookie"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-medium-cookie",
      "kind": "unit",
      "label": "1 medium cookie"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-mini-or-bite-size-cookie",
      "kind": "unit",
      "label": "1 mini or bite size cookie"
    },
    {
      "gramsPerUnit": 10.5,
      "key": "1-nabisco-chips-ahoy",
      "kind": "unit",
      "label": "1 Nabisco Chips Ahoy!"
    }
  ],
  "name": "Cookie, chocolate chip",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 65.4,
    "energy_kcal": 492.0,
    "fat_g": 24.7,
    "fibre_g": 2.0,
    "folate_ug": 72.0,
    "iron_mg": 5.58,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 171.0,
    "protein_g": 5.1,
    "salt_g": 0.7775,
    "sat_fat_g": 8.09,
    "sodium_mg": 311.0,
    "sugar_g": 32.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.01,
    "vitamin_k_ug": 33.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707909",
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
