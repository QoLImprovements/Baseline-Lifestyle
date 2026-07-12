/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe. Ref. Wiles et al. (1980)",
  "id": "cofid-current-12-947",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Omelette, cheese, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 280.0,
    "carbs_g": 0.0,
    "energy_kcal": 268.0,
    "fat_g": 22.7,
    "fibre_g": 0.0,
    "folate_ug": 29.0,
    "iron_mg": 1.11,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 277.0,
    "potassium_mg": 110.0,
    "protein_g": 15.9,
    "salt_g": 0.8425,
    "sat_fat_g": 9.55,
    "sodium_mg": 337.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 204.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-947",
  "state": "Unspecified",
  "subcategory": "CD",
  "tags": [
    "cd",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
