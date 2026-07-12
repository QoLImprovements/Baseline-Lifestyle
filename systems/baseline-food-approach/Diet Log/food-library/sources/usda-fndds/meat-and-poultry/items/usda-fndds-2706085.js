/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706085",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-foot",
      "kind": "unit",
      "label": "1 foot"
    }
  ],
  "name": "Chicken feet",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 0.2,
    "energy_kcal": 215.0,
    "fat_g": 14.6,
    "fibre_g": 0.0,
    "folate_ug": 86.0,
    "iron_mg": 0.91,
    "magnesium_mg": 5.0,
    "omega3_g": 0.079,
    "phosphorus_mg": 83.0,
    "potassium_mg": 31.0,
    "protein_g": 19.4,
    "salt_g": 0.1675,
    "sat_fat_g": 3.92,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706085",
  "state": "Unspecified",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
