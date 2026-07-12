/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Calculated from 18g powder to 200ml milk",
  "id": "cofid-current-17-790",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Drinking chocolate powder, made up with semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 10.9,
    "energy_kcal": 74.0,
    "fat_g": 2.0,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.31,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 184.0,
    "protein_g": 3.7,
    "salt_g": 0.145,
    "sat_fat_g": 1.26,
    "sodium_mg": 58.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-790",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "milk-dairy-and-eggs",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
