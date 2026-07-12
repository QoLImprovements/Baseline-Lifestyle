/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "cup",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-167695",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Mayonnaise, made with tofu",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 3.06,
    "energy_kcal": 322.0,
    "fat_g": 31.8,
    "fibre_g": 1.1,
    "folate_ug": 8.0,
    "iron_mg": 0.27,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 66.0,
    "protein_g": 5.95,
    "salt_g": 1.9325,
    "sat_fat_g": 2.92,
    "sodium_mg": 773.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.4,
    "vitamin_k_ug": 53.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167695",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "soy-and-plant-proteins",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
