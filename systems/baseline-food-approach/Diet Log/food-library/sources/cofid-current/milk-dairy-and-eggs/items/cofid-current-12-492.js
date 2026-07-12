/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, sampled at spring and autumn",
  "id": "cofid-current-12-492",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Port Salut, St Paulin type",
  "nutritionPerBasis": {
    "calcium_mg": 609.0,
    "carbs_g": 0.0,
    "energy_kcal": 333.0,
    "fat_g": 25.7,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 0.4,
    "magnesium_mg": 25.0,
    "omega3_g": 0.22,
    "phosphorus_mg": 386.0,
    "potassium_mg": 62.0,
    "protein_g": 25.5,
    "salt_g": 1.7475,
    "sat_fat_g": 18.06,
    "sodium_mg": 699.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 299.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-492",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
