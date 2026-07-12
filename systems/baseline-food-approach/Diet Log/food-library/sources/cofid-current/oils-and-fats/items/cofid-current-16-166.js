/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Fillets coated in crumbs and fried",
  "id": "cofid-current-16-166",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Whiting, in crumbs, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 7.0,
    "energy_kcal": 191.0,
    "fat_g": 10.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.7,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 320.0,
    "protein_g": 18.1,
    "salt_g": 0.5,
    "sat_fat_g": 1.2,
    "sodium_mg": 200.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-166",
  "state": "Fried",
  "subcategory": "JA",
  "tags": [
    "fried",
    "ja",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
