/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-12-572",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Custard, confectioners'",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 24.8,
    "energy_kcal": 153.0,
    "fat_g": 3.8,
    "fibre_g": 0.3,
    "folate_ug": 15.0,
    "iron_mg": 0.63,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 173.0,
    "protein_g": 6.6,
    "salt_g": 0.185,
    "sat_fat_g": 1.52,
    "sodium_mg": 74.0,
    "sugar_g": 19.0,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-572",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
