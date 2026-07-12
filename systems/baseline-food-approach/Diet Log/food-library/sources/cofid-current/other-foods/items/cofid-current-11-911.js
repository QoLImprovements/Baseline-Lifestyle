/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples; 6 homemade, 3 café. Deep fried chapati",
  "id": "cofid-current-11-911",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Puri, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 36.5,
    "energy_kcal": 366.0,
    "fat_g": 22.3,
    "fibre_g": 3.5,
    "folate_ug": 32.0,
    "iron_mg": 2.47,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 180.0,
    "protein_g": 7.2,
    "salt_g": 0.6975,
    "sat_fat_g": 2.66,
    "sodium_mg": 279.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.76,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-911",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
