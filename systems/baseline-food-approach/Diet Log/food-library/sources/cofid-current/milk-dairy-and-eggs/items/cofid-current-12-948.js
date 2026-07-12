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
  "id": "cofid-current-12-948",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Quiche, cheese and egg, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 259.0,
    "carbs_g": 14.6,
    "energy_kcal": 305.0,
    "fat_g": 22.3,
    "fibre_g": 1.2,
    "folate_ug": 12.0,
    "iron_mg": 0.85,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 216.0,
    "potassium_mg": 130.0,
    "protein_g": 12.5,
    "salt_g": 0.775,
    "sat_fat_g": 10.4,
    "sodium_mg": 310.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 136.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-948",
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
