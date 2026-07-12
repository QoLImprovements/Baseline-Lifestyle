/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170967",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, cereal, mixed, with applesauce and bananas, junior, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 18.8,
    "energy_kcal": 84.0,
    "fat_g": 0.51,
    "fibre_g": 1.0,
    "folate_ug": 25.0,
    "iron_mg": 6.81,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 111.0,
    "protein_g": 0.71,
    "salt_g": 0.0125,
    "sat_fat_g": 0.072,
    "sodium_mg": 5.0,
    "sugar_g": 11.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 15.9,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170967",
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
