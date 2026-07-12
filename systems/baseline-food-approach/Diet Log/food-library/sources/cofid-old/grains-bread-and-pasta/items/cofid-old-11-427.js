/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "7 samples, 2 brands; apple, strawberry, and raspberry. Rice pudding dessert with puréed f ruit",
  "id": "cofid-old-11-427",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Desserts, rice, with fruit, individual, chilled",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 21.6,
    "energy_kcal": 113.0,
    "fat_g": 2.2,
    "fibre_g": 2.0,
    "folate_ug": 7.0,
    "iron_mg": 0.16,
    "magnesium_mg": 11.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 84.0,
    "potassium_mg": 144.0,
    "protein_g": 3.1,
    "salt_g": 0.2125,
    "sat_fat_g": 1.46,
    "sodium_mg": 85.0,
    "sugar_g": 13.6,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-427",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
