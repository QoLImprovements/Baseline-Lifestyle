/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Approx. 9% ABV, including Carlsberg Special Brew, Skol Super, Tennent's Super and Kestrel Super",
  "id": "cofid-current-17-676",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lager, extra strong",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 2.4,
    "energy_kcal": 60.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.0,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 39.0,
    "protein_g": 0.3,
    "salt_g": 0.0175,
    "sat_fat_g": 0.0,
    "sodium_mg": 7.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-676",
  "state": "Unspecified",
  "subcategory": "QA",
  "tags": [
    "other-foods",
    "qa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
