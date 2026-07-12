/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 3 brands. Own brands",
  "id": "cofid-current-17-825",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Instant drinks powder, malted, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 349.0,
    "carbs_g": 82.5,
    "energy_kcal": 388.0,
    "fat_g": 6.2,
    "fibre_g": 2.1,
    "folate_ug": 18.0,
    "iron_mg": 0.6,
    "magnesium_mg": 67.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 470.0,
    "potassium_mg": 1191.0,
    "protein_g": 5.7,
    "salt_g": 1.0,
    "sat_fat_g": 3.8,
    "sodium_mg": 400.0,
    "sugar_g": 54.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-825",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "other-foods",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
