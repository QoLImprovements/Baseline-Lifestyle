/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "12-inch-sub",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170312",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 296.0,
      "key": "12-inch-sub",
      "kind": "unit",
      "label": "12 inch sub"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "6-inch-sub",
      "kind": "unit",
      "label": "6 inch sub"
    }
  ],
  "name": "SUBWAY, B.L.T. sub on white bread with bacon, lettuce and tomato",
  "nutritionPerBasis": {
    "calcium_mg": 210.0,
    "carbs_g": 26.7,
    "energy_kcal": 205.0,
    "fat_g": 6.41,
    "fibre_g": 1.6,
    "folate_ug": 89.0,
    "iron_mg": 2.14,
    "magnesium_mg": 22.0,
    "omega3_g": 0.106,
    "phosphorus_mg": 101.0,
    "potassium_mg": 186.0,
    "protein_g": 10.1,
    "salt_g": 0.885,
    "sat_fat_g": 1.92,
    "sodium_mg": 354.0,
    "sugar_g": 3.61,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170312",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
