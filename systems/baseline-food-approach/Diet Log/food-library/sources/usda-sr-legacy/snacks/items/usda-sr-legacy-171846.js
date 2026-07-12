/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "5-crackers-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171846",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "5-crackers-1-serving",
      "kind": "unit",
      "label": "5 crackers 1 serving"
    }
  ],
  "name": "Crackers, standard snack-type, with whole wheat",
  "nutritionPerBasis": {
    "calcium_mg": 167.0,
    "carbs_g": 68.4,
    "energy_kcal": 1940.0,
    "fat_g": 17.8,
    "fibre_g": 4.9,
    "folate_ug": 58.0,
    "iron_mg": 3.65,
    "magnesium_mg": 47.0,
    "omega3_g": 0.862,
    "phosphorus_mg": 356.0,
    "potassium_mg": 209.0,
    "protein_g": 7.29,
    "salt_g": 1.87,
    "sat_fat_g": 4.34,
    "sodium_mg": 748.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.9,
    "vitamin_k_ug": 14.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171846",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
