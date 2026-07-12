/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 85% lean and 14% fat, including grilled and char-grilled",
  "id": "cofid-current-18-051",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, rump steak, from steakhouse, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 213.0,
    "fat_g": 11.4,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 2.2,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 370.0,
    "protein_g": 27.5,
    "salt_g": 0.165,
    "sat_fat_g": 4.9,
    "sodium_mg": 66.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-051",
  "state": "Unspecified",
  "subcategory": "MAC",
  "tags": [
    "mac",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
