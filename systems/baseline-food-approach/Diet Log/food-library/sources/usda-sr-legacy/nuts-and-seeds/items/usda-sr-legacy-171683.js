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
  "id": "usda-sr-legacy-171683",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "package-1-nlea-serving",
      "kind": "unit",
      "label": "package (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, oatmeal, REAL MEDLEYS, blueberry hazelnut, dry",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 69.5,
    "energy_kcal": 1620.0,
    "fat_g": 9.8,
    "fibre_g": 7.7,
    "folate_ug": 34.0,
    "iron_mg": 3.08,
    "magnesium_mg": 98.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 287.0,
    "potassium_mg": 317.0,
    "protein_g": 9.81,
    "salt_g": 0.8425,
    "sat_fat_g": 1.65,
    "sodium_mg": 337.0,
    "sugar_g": 18.7,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171683",
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
