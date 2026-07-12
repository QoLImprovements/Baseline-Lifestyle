/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "2-crackers-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174985",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.5,
      "key": "2-crackers-1-serving",
      "kind": "unit",
      "label": "2 crackers 1 serving"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "16-crackers-1-serving",
      "kind": "unit",
      "label": "16 crackers 1 serving"
    }
  ],
  "name": "Crackers, wheat, regular",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 70.7,
    "energy_kcal": 455.0,
    "fat_g": 16.4,
    "fibre_g": 6.9,
    "folate_ug": 38.0,
    "iron_mg": 2.64,
    "magnesium_mg": 72.0,
    "omega3_g": 0.957,
    "phosphorus_mg": 302.0,
    "potassium_mg": 283.0,
    "protein_g": 7.3,
    "salt_g": 1.7475,
    "sat_fat_g": 3.21,
    "sodium_mg": 699.0,
    "sugar_g": 15.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.55,
    "vitamin_k_ug": 14.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174985",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
