/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171359",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Babyfood, cereal, whole wheat, with apples, dry fortified",
  "nutritionPerBasis": {
    "calcium_mg": 600.0,
    "carbs_g": 83.2,
    "energy_kcal": 402.0,
    "fat_g": 4.8,
    "fibre_g": 6.7,
    "folate_ug": 166.0,
    "iron_mg": 45.0,
    "magnesium_mg": 140.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 500.0,
    "protein_g": 6.6,
    "salt_g": 0.165,
    "sat_fat_g": 0.639,
    "sodium_mg": 66.0,
    "sugar_g": 26.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 58.3,
    "vitamin_e_mg": 50.0,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171359",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
