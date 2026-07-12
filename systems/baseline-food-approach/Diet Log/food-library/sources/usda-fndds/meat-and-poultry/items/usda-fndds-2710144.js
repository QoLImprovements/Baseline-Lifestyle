/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-moussaka-8-square",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2710144",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 915.0,
      "key": "1-moussaka-8-square",
      "kind": "unit",
      "label": "1 moussaka (8\" square)"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "1-piece-3-x-2-x-1",
      "kind": "unit",
      "label": "1 piece (3\" x 2\" x 1\")"
    },
    {
      "gramsPerUnit": 14.3,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 203.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1228.0,
      "key": "1-moussaka-7-x-12",
      "kind": "unit",
      "label": "1 moussaka (7\" x 12\")"
    }
  ],
  "name": "Eggplant and meat casserole",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 4.67,
    "energy_kcal": 96.0,
    "fat_g": 5.53,
    "fibre_g": 1.5,
    "folate_ug": 18.0,
    "iron_mg": 0.85,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 91.0,
    "potassium_mg": 224.0,
    "protein_g": 7.11,
    "salt_g": 0.44,
    "sat_fat_g": 1.92,
    "sodium_mg": 176.0,
    "sugar_g": 2.89,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 21.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710144",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
