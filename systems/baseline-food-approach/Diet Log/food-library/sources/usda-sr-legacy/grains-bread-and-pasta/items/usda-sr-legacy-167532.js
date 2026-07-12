/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167532",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, white wheat",
  "nutritionPerBasis": {
    "calcium_mg": 684.0,
    "carbs_g": 43.9,
    "energy_kcal": 238.0,
    "fat_g": 2.15,
    "fibre_g": 9.2,
    "folate_ug": 127.0,
    "iron_mg": 4.89,
    "magnesium_mg": 26.0,
    "omega3_g": 0.086,
    "phosphorus_mg": 103.0,
    "potassium_mg": 127.0,
    "protein_g": 10.7,
    "salt_g": 1.195,
    "sat_fat_g": 0.63,
    "sodium_mg": 478.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 7.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167532",
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
