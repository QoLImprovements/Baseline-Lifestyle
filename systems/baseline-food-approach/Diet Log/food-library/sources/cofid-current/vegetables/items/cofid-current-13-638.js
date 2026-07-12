/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, fresh, UK and imported, including tips and thicker stems. Tough base of stems removed, steamed for 3-18 minutes",
  "id": "cofid-current-13-638",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Asparagus, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 1.6,
    "energy_kcal": 21.0,
    "fat_g": 0.4,
    "fibre_g": 1.3,
    "folate_ug": 102.0,
    "iron_mg": 0.5,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 283.0,
    "protein_g": 2.9,
    "salt_g": 0.0075,
    "sat_fat_g": 0.05,
    "sodium_mg": 3.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 1.45,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-638",
  "state": "Steamed",
  "subcategory": "DG",
  "tags": [
    "dg",
    "steamed",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
