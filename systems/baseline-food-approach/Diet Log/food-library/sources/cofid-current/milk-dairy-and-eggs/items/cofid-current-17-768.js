/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "17% ABV, 2 samples of Baileys Original Irish Cream",
  "id": "cofid-current-17-768",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Liqueurs, cream",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 21.8,
    "energy_kcal": 305.0,
    "fat_g": 13.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.1,
    "magnesium_mg": 2.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 38.0,
    "potassium_mg": 19.0,
    "protein_g": 3.0,
    "salt_g": 0.2225,
    "sat_fat_g": 8.2,
    "sodium_mg": 89.0,
    "sugar_g": 21.8,
    "vitamin_a_ug": 205.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-768",
  "state": "Unspecified",
  "subcategory": "QI",
  "tags": [
    "milk-dairy-and-eggs",
    "qi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
