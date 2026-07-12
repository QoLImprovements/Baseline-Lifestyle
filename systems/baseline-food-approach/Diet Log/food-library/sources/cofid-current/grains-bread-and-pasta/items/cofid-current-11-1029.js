/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1029",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Banana bread, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 53.9,
    "energy_kcal": 331.0,
    "fat_g": 12.4,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.1,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 285.0,
    "protein_g": 4.4,
    "salt_g": 0.4275,
    "sat_fat_g": 3.27,
    "sodium_mg": 171.0,
    "sugar_g": 36.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1029",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
