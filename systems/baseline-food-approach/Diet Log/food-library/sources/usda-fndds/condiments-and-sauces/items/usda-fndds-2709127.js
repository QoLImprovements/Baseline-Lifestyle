/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2709127",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 290.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 290.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, brown, with vegetables, soy-based sauce, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 19.2,
    "energy_kcal": 105.0,
    "fat_g": 2.02,
    "fibre_g": 1.7,
    "folate_ug": 9.0,
    "iron_mg": 0.5,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 72.0,
    "potassium_mg": 87.0,
    "protein_g": 2.27,
    "salt_g": 0.88,
    "sat_fat_g": 0.367,
    "sodium_mg": 352.0,
    "sugar_g": 1.58,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709127",
  "state": "Unspecified",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "condiments-and-sauces",
    "fried-rice-and-lo-chow-mein",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
