/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "large-serving",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170721",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "large-serving",
      "kind": "unit",
      "label": "large serving"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "small-serving",
      "kind": "unit",
      "label": "small serving"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "medium-serving",
      "kind": "unit",
      "label": "medium serving"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "kids-serving",
      "kind": "unit",
      "label": "kids serving"
    }
  ],
  "name": "McDONALD'S, french fries",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 42.6,
    "energy_kcal": 1350.0,
    "fat_g": 15.5,
    "fibre_g": 3.9,
    "folate_ug": 0.0,
    "iron_mg": 0.8,
    "magnesium_mg": 37.0,
    "omega3_g": 0.382,
    "phosphorus_mg": 127.0,
    "potassium_mg": 596.0,
    "protein_g": 3.41,
    "salt_g": 0.4725,
    "sat_fat_g": 2.27,
    "sodium_mg": 189.0,
    "sugar_g": 0.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 16.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170721",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
