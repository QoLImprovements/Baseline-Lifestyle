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
  "id": "usda-sr-legacy-173924",
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
  "name": "Cereals, QUAKER, oatmeal, REAL MEDLEYS, peach almond, dry",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 68.6,
    "energy_kcal": 387.0,
    "fat_g": 9.84,
    "fibre_g": 7.4,
    "folate_ug": 27.0,
    "iron_mg": 2.8,
    "magnesium_mg": 115.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 302.0,
    "potassium_mg": 560.0,
    "protein_g": 10.1,
    "salt_g": 0.5025,
    "sat_fat_g": 1.11,
    "sodium_mg": 201.0,
    "sugar_g": 24.8,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 16.1,
    "vitamin_e_mg": 2.46,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173924",
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
