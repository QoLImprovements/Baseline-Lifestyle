/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-871",
  "id": "cofid-current-14-884",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Brazil nuts, kernel only, weighed with shells",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 1.4,
    "energy_kcal": 314.0,
    "fat_g": 31.4,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.1,
    "magnesium_mg": 190.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 300.0,
    "protein_g": 6.5,
    "salt_g": 0.0025,
    "sat_fat_g": 8.01,
    "sodium_mg": 1.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-884",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
