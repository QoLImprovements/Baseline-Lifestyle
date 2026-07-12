/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "7 samples, 6 products, frozen and chilled",
  "id": "cofid-current-16-390",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mussels, purchased cooked",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 3.5,
    "energy_kcal": 104.0,
    "fat_g": 2.2,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 3.25,
    "magnesium_mg": 50.0,
    "omega3_g": 0.54,
    "phosphorus_mg": 258.0,
    "potassium_mg": 116.0,
    "protein_g": 17.7,
    "salt_g": 1.0025,
    "sat_fat_g": 0.34,
    "sodium_mg": 401.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 117.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.72,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-390",
  "state": "Cooked",
  "subcategory": "JM",
  "tags": [
    "cooked",
    "jm",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
