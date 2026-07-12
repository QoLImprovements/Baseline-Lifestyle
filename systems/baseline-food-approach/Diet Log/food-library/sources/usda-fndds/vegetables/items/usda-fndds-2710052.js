/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2710052",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-stuffed-cap",
      "kind": "unit",
      "label": "1 stuffed cap"
    }
  ],
  "name": "Mushrooms, stuffed",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 27.7,
    "energy_kcal": 288.0,
    "fat_g": 15.0,
    "fibre_g": 3.0,
    "folate_ug": 50.0,
    "iron_mg": 1.83,
    "magnesium_mg": 27.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 203.0,
    "potassium_mg": 434.0,
    "protein_g": 10.7,
    "salt_g": 1.595,
    "sat_fat_g": 4.08,
    "sodium_mg": 638.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 112.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 13.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710052",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "unspecified",
    "vegetable-dishes",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
