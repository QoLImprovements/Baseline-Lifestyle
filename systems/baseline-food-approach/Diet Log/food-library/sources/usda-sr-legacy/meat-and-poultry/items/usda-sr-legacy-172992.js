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
  "id": "usda-sr-legacy-172992",
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
  "name": "Cereals, QUAKER, Instant Grits, Redeye Gravy & Country Ham flavor, dry",
  "nutritionPerBasis": {
    "calcium_mg": 441.0,
    "carbs_g": 75.9,
    "energy_kcal": 1430.0,
    "fat_g": 1.58,
    "fibre_g": 4.6,
    "folate_ug": 187.0,
    "iron_mg": 42.0,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 172.0,
    "protein_g": 9.83,
    "salt_g": 4.5,
    "sat_fat_g": 0.23,
    "sodium_mg": 1800.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172992",
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
