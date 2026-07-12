/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe. Ref. Wiles et al. (1980). Apple, gooseberry, plum, rhubarb",
  "id": "cofid-current-11-1075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, fruit, wholemeal, one crust, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 27.6,
    "energy_kcal": 182.0,
    "fat_g": 7.6,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.63,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 198.0,
    "protein_g": 2.5,
    "salt_g": 0.165,
    "sat_fat_g": 4.55,
    "sodium_mg": 66.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1075",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
