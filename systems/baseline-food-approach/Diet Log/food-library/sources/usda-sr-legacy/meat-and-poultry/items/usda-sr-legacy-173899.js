/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "packet-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173899",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "packet-1-nlea-serving",
      "kind": "unit",
      "label": "packet (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Instant Grits, Country Bacon flavor, dry",
  "nutritionPerBasis": {
    "calcium_mg": 418.0,
    "carbs_g": 75.4,
    "energy_kcal": 1420.0,
    "fat_g": 1.73,
    "fibre_g": 5.1,
    "folate_ug": 178.0,
    "iron_mg": 30.4,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 210.0,
    "protein_g": 9.93,
    "salt_g": 3.8,
    "sat_fat_g": 0.24,
    "sodium_mg": 1520.0,
    "sugar_g": 0.38,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173899",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
