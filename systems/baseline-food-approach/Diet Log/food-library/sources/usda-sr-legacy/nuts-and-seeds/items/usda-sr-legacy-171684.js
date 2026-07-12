/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "package-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171684",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "package-1-nlea-serving",
      "kind": "unit",
      "label": "package (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, oatmeal, REAL MEDLEYS, apple walnut, dry",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 70.5,
    "energy_kcal": 390.0,
    "fat_g": 10.4,
    "fibre_g": 7.0,
    "folate_ug": 20.0,
    "iron_mg": 2.77,
    "magnesium_mg": 86.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 239.0,
    "potassium_mg": 344.0,
    "protein_g": 8.18,
    "salt_g": 0.89,
    "sat_fat_g": 1.3,
    "sodium_mg": 356.0,
    "sugar_g": 29.4,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171684",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
