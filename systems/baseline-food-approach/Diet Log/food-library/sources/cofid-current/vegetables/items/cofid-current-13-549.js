/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Peeled thickly, seeds removed, boiled for 15 minutes, based on boiled in salted water",
  "id": "cofid-current-13-549",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pumpkin, flesh only, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 1.9,
    "energy_kcal": 12.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.1,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 84.0,
    "protein_g": 0.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.1,
    "sodium_mg": 0.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 160.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 2.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-549",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
