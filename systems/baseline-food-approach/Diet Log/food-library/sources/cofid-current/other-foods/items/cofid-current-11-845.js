/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including large, slices and individual cherry bakewells",
  "id": "cofid-current-11-845",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tarts, bakewell, iced, retail",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 65.9,
    "energy_kcal": 411.0,
    "fat_g": 16.8,
    "fibre_g": 1.1,
    "folate_ug": 6.0,
    "iron_mg": 0.58,
    "magnesium_mg": 12.0,
    "omega3_g": 0.54,
    "phosphorus_mg": 73.0,
    "potassium_mg": 117.0,
    "protein_g": 3.1,
    "salt_g": 0.33,
    "sat_fat_g": 6.94,
    "sodium_mg": 132.0,
    "sugar_g": 45.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-845",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
