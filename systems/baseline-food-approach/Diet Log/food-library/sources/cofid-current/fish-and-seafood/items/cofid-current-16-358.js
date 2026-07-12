/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, fresh fillets",
  "id": "cofid-current-16-358",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, farmed, flesh only, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 261.0,
    "fat_g": 18.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.39,
    "magnesium_mg": 31.0,
    "omega3_g": 3.93,
    "phosphorus_mg": 269.0,
    "potassium_mg": 425.0,
    "protein_g": 23.6,
    "salt_g": 0.1275,
    "sat_fat_g": 3.5,
    "sodium_mg": 51.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-358",
  "state": "Steamed",
  "subcategory": "J",
  "tags": [
    "fish-and-seafood",
    "j",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
