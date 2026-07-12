/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Portion includes a quarter pound beefburger, ketchup, mustard, onions, pickles and slice of cheese",
  "id": "cofid-current-19-487",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, Quarter Pounder with cheese, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 21.2,
    "energy_kcal": 263.0,
    "fat_g": 13.2,
    "fibre_g": 1.6,
    "folate_ug": 0.0,
    "iron_mg": 1.0,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 141.0,
    "potassium_mg": 168.0,
    "protein_g": 16.3,
    "salt_g": 1.1575,
    "sat_fat_g": 6.8,
    "sodium_mg": 463.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-487",
  "state": "Unspecified",
  "subcategory": "MBG",
  "tags": [
    "mbg",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
