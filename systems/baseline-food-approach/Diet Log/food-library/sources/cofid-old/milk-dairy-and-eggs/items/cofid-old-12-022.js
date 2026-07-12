/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "3 cultured samples (Eden Vale)",
  "id": "cofid-old-12-022",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Buttermilk",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 5.0,
    "energy_kcal": 37.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.02,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 150.0,
    "protein_g": 3.4,
    "salt_g": 0.14,
    "sat_fat_g": 0.3,
    "sodium_mg": 56.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-022",
  "state": "Unspecified",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
