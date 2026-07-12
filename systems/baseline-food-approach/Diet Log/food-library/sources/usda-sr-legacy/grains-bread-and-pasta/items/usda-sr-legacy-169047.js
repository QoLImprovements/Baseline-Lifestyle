/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cookie",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-169047",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.7,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Babyfood, baked product, finger snacks cereal fortified",
  "nutritionPerBasis": {
    "calcium_mg": 400.0,
    "carbs_g": 76.7,
    "energy_kcal": 421.0,
    "fat_g": 9.9,
    "fibre_g": 2.3,
    "folate_ug": 114.0,
    "iron_mg": 22.5,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 709.0,
    "potassium_mg": 114.0,
    "protein_g": 6.4,
    "salt_g": 0.0,
    "sat_fat_g": 1.65,
    "sodium_mg": 0.0,
    "sugar_g": 28.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 3.9,
    "vitamin_k_ug": 15.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169047",
  "state": "Baked",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "baked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
