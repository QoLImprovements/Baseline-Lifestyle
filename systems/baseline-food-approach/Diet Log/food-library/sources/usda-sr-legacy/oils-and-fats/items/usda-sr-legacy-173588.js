/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tbsp-1-nlea-serving",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-173588",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp-1-nlea-serving",
      "kind": "unit",
      "label": "tbsp (1 NLEA serving)"
    }
  ],
  "name": "Margarine, margarine-type vegetable oil spread, 70% fat, soybean and partially hydrogenated soybean, stick",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 1.53,
    "energy_kcal": 628.0,
    "fat_g": 70.2,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.12,
    "magnesium_mg": 2.0,
    "omega3_g": 2.072,
    "phosphorus_mg": 10.0,
    "potassium_mg": 46.0,
    "protein_g": 0.26,
    "salt_g": 1.75,
    "sat_fat_g": 13.6,
    "sodium_mg": 700.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3570.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.59,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173588",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
