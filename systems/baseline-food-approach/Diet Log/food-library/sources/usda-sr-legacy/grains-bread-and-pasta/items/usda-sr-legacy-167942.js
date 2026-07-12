/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167942",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Crackers, saltines, whole wheat (includes multi-grain)",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 68.2,
    "energy_kcal": 398.0,
    "fat_g": 10.7,
    "fibre_g": 6.7,
    "folate_ug": 82.0,
    "iron_mg": 5.14,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 196.0,
    "potassium_mg": 221.0,
    "protein_g": 7.14,
    "salt_g": 3.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1210.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 18.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167942",
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
