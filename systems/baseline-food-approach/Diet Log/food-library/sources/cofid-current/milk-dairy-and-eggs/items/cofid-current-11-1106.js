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
  "id": "cofid-current-11-1106",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Porridge, made with milk and water",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 11.2,
    "energy_kcal": 72.0,
    "fat_g": 1.9,
    "fibre_g": 1.0,
    "folate_ug": 6.0,
    "iron_mg": 0.46,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 127.0,
    "protein_g": 3.1,
    "salt_g": 0.055,
    "sat_fat_g": 0.71,
    "sodium_mg": 22.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1106",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
