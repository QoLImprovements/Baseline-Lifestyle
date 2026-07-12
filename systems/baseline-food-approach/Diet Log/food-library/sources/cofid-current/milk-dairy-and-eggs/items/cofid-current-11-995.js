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
  "id": "cofid-current-11-995",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Quiche, cheese and egg, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 240.0,
    "carbs_g": 15.6,
    "energy_kcal": 294.0,
    "fat_g": 20.4,
    "fibre_g": 2.1,
    "folate_ug": 17.0,
    "iron_mg": 1.03,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 259.0,
    "potassium_mg": 173.0,
    "protein_g": 13.0,
    "salt_g": 0.775,
    "sat_fat_g": 11.82,
    "sodium_mg": 310.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 244.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-995",
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
