/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources. Drained proportion = 0.53",
  "id": "cofid-old-14-058",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Boysenberries, canned in syrup, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 20.4,
    "energy_kcal": 88.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 34.0,
    "iron_mg": 0.4,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 90.0,
    "protein_g": 1.0,
    "salt_g": 0.0075,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.0,
    "sugar_g": 20.4,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-058",
  "state": "Canned",
  "subcategory": "FA",
  "tags": [
    "canned",
    "fa",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
