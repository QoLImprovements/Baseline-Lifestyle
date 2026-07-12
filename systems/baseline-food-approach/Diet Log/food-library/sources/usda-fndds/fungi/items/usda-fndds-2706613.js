/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706613",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef, noodles, and vegetables excluding carrots, broccoli, and dark-green leafy; mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 14.6,
    "energy_kcal": 129.0,
    "fat_g": 5.03,
    "fibre_g": 1.1,
    "folate_ug": 41.0,
    "iron_mg": 1.06,
    "magnesium_mg": 17.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 79.0,
    "potassium_mg": 108.0,
    "protein_g": 6.63,
    "salt_g": 0.775,
    "sat_fat_g": 1.15,
    "sodium_mg": 310.0,
    "sugar_g": 1.08,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 9.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706613",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "fungi",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
