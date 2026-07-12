/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe, substituting 25g of made up dream topping for 25g double cream",
  "id": "cofid-current-12-601",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Trifle, with Dream Topping",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 22.1,
    "energy_kcal": 152.0,
    "fat_g": 5.9,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.31,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 124.0,
    "protein_g": 2.8,
    "salt_g": 0.195,
    "sat_fat_g": 3.37,
    "sodium_mg": 78.0,
    "sugar_g": 17.1,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-601",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
