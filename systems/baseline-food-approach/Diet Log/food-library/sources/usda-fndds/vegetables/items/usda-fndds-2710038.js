/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710038",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Vegetable mixture, dried",
  "nutritionPerBasis": {
    "calcium_mg": 232.0,
    "carbs_g": 49.2,
    "energy_kcal": 328.0,
    "fat_g": 8.88,
    "fibre_g": 18.5,
    "folate_ug": 233.0,
    "iron_mg": 5.45,
    "magnesium_mg": 152.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 406.0,
    "potassium_mg": 1640.0,
    "protein_g": 17.4,
    "salt_g": 0.92,
    "sat_fat_g": 1.19,
    "sodium_mg": 368.0,
    "sugar_g": 18.9,
    "vitamin_a_ug": 988.0,
    "vitamin_c_mg": 193.0,
    "vitamin_e_mg": 5.95,
    "vitamin_k_ug": 224.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710038",
  "state": "Dried",
  "subcategory": "Not included in a food category",
  "tags": [
    "dried",
    "not-included-in-a-food-category",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
