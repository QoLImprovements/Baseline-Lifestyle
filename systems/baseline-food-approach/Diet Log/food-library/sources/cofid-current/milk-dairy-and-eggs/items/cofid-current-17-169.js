/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "225ml infusion with 35g semi-skimmed milk",
  "id": "cofid-current-17-169",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tea, infusion, average, with semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.7,
    "energy_kcal": 7.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.0,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 44.0,
    "protein_g": 0.5,
    "salt_g": 0.0175,
    "sat_fat_g": 0.1,
    "sodium_mg": 7.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-169",
  "state": "Unspecified",
  "subcategory": "PAC",
  "tags": [
    "milk-dairy-and-eggs",
    "pac",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
