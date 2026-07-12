/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item-4-1-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172070",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "item-4-1-oz",
      "kind": "unit",
      "label": "item 4.1 oz"
    }
  ],
  "name": "McDONALD'S, Sausage Biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 27.2,
    "energy_kcal": 1570.0,
    "fat_g": 25.4,
    "fibre_g": 1.2,
    "folate_ug": 91.0,
    "iron_mg": 2.01,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 323.0,
    "potassium_mg": 177.0,
    "protein_g": 9.62,
    "salt_g": 2.1875,
    "sat_fat_g": 10.7,
    "sodium_mg": 875.0,
    "sugar_g": 1.97,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172070",
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
