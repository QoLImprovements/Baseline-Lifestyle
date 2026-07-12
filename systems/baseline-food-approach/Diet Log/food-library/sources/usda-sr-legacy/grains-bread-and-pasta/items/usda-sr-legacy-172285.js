/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "jar-earth-s-best",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172285",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-earth-s-best",
      "kind": "unit",
      "label": "jar Earth's Best"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, plums, bananas and rice, strained",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 12.7,
    "energy_kcal": 57.0,
    "fat_g": 0.3,
    "fibre_g": 1.3,
    "folate_ug": 6.0,
    "iron_mg": 0.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 265.0,
    "protein_g": 1.1,
    "salt_g": 0.0,
    "sat_fat_g": 0.06,
    "sodium_mg": 0.0,
    "sugar_g": 9.3,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 12.3,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172285",
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
