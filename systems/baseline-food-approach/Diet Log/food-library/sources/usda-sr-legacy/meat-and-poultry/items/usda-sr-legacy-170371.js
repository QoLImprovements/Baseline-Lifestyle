/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170371",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 597.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "DOMINO'S 14\" Sausage Pizza, Crunchy Thin Crust",
  "nutritionPerBasis": {
    "calcium_mg": 234.0,
    "carbs_g": 25.3,
    "energy_kcal": 1330.0,
    "fat_g": 18.5,
    "fibre_g": 2.6,
    "folate_ug": 0.0,
    "iron_mg": 1.07,
    "magnesium_mg": 25.0,
    "omega3_g": 0.474,
    "phosphorus_mg": 270.0,
    "potassium_mg": 231.0,
    "protein_g": 12.8,
    "salt_g": 1.8125,
    "sat_fat_g": 7.08,
    "sodium_mg": 725.0,
    "sugar_g": 3.42,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170371",
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
